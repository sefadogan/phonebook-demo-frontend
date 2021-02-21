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
}

export default ContactService;
