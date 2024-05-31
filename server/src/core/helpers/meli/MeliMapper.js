import ItemModel from "../../features/models/ItemModel.js";

class MeliMapper {
  mapGetSearchByResponse({ filters = [], results = [] }) {
    const categories = filters.length > 0 ? filters[0].values[0].path_from_root.map(({ name }) => name) : [];
    const items = results.map(this.responseWrapperItemsWrapper);
    return { categories, items };
  }

  responseWrapperItemsWrapper(data) {
    const { item } = ItemModel.ItemsBySearchRs(data);
    return item;
  }
}

export default MeliMapper;
