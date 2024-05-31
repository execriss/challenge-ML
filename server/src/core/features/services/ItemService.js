import MeliService from '../../helpers/meli/MeliService.js';
import ItemModel from '../../features/models/ItemModel.js';

const formatError = (error) => ({
    error: {
        message: error.message,
        stack: error.stack
    }
});

export const getItemsByQuery = async ({ q }) => {
    try {
        return await MeliService.getSearch({ q });
    } catch (error) {
        return formatError(error);
    }
};

export const getItemById = async ({ id }) => {
    try {
        const [itemData, descriptionData, currenciesData] = await Promise.all([
            MeliService.getItemById(id),
            MeliService.getItemByDescription(id),
            MeliService.getCurrencies(),
        ]);

        const { plain_text: description } = descriptionData;
        const itemCurrency = currenciesData.find(c => c.id == itemData.currency_id);

        if (!itemCurrency) {
            throw new Error(`Item with id ${id} not found`);
        }

        const { decimal_places, symbol: currency_symbol } = itemCurrency;

        const category = await MeliService.getCategoryById(itemData.category_id);
        const category_path = category.path_from_root.map(({ name }) => name);

        const meliItemData = {
            ...itemData,
            decimal_places,
            currency_symbol,
            description,
        };

        const itemDetail = ItemModel.ItemsByIdRs(meliItemData);

        return {
            ...itemDetail,
            category_path
        };

    } catch (error) {
        return formatError(error);
    }
};

export default {
    getItemsByQuery,
    getItemById
};
