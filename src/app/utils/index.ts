export const debounce = (callback: any, timeout = 300) => {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, timeout);
  };
};

export const extractGoogleMapsAddress = (place: any) => {
  const result = {
    address: "",
    state: "",
    city: "",
    neighborhood: "",
    country: "",
    postalCode: "",
  };

  if (place.address_components) {
    place.address_components.map((component: any) => {
      // Get Street & Number
      if (component.types.includes("route")) {
        result["address"] = component.short_name;
      }
      // Get State:
      if (component.types.includes("administrative_area_level_1")) {
        result["state"] = component.short_name;
      }
      // Get City:
      if (component.types.includes("administrative_area_level_2")) {
        result["city"] = component.short_name;
      }
      // Get neighborhood
      if (component.types.includes("sublocality")) {
        result["neighborhood"] = component.short_name;
      }
      // Get Postal Code
      if (component.types.includes("postal_code")) {
        result["postalCode"] = component.short_name;
      }
      // Get Country
      if (component.types.includes("country")) {
        result["country"] = component.short_name;
      }
    });
  }

  return result;
};
