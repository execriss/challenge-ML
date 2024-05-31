const formatItemResponse = ({
  id,
  title,
  currency_id,
  price,
  decimal_places,
  secure_thumbnail,
  thumbnail,
  pictures,
  condition,
  shipping,
  sold_quantity,
  description,
}, isSearchResponse = false) => {
  const formattedItem = {
    id,
    title,
    price: {
      currency: currency_id,
      amount: price,
      decimals: decimal_places || 2,
    },
    picture: pictures && pictures.length ? pictures[0].secure_url : secure_thumbnail || thumbnail,
    condition,
    free_shipping: shipping.free_shipping,
  };

  if (!isSearchResponse) {
    formattedItem.sold_quantity = sold_quantity;
    formattedItem.description = description || "";
  }

  return { item: formattedItem };
};

export const ItemsBySearchRs = (data) => {
  return formatItemResponse(data, true);
};

export const ItemsByIdRs = (data) => {
  return formatItemResponse(data);
};

export default {
  ItemsBySearchRs,
  ItemsByIdRs,
};
