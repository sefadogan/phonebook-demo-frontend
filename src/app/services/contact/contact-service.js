import ContactServiceUrls from "./contact-service.urls";

class ContactService {
  static getList = async () => {
    try {
      const response = await fetch(ContactServiceUrls.GET_LIST);

      if (response.ok) {
        return await response.json();
      } else {
        console.log(response.statusText);
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  static delete = async (id) => {
    try {
      const config = {
        method: "DELETE",
      };

      const url = `${ContactServiceUrls.DELETE}/${id}`;
      const response = await fetch(url, config);

      if (!response.ok) {
        console.log(response.statusText);
      }

      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export default ContactService;
