import axios from "axios";

const BASE_URL = "https://api.contact-manager.project.skyshi.io";

export async function getAllContactsData() {
  return await axios.get(`${BASE_URL}/contacts`).catch((error) => {
    return error;
  });
}

export async function addNewContact(payload) {
  const res = await getAllContactsData();
  const data = res?.data?.data;

  for (let i = 0; i < data.length; i++) {
    if (data[i].full_name === payload.full_name) {
      alert("Data nama sudah ada di database");
      return;
    }

    if (data[i].phone_number === payload.phone_number) {
      alert("Data nomor sudah ada di database");
      return;
    }

    if (data[i].email === payload.email) {
      alert("Data email sudah ada di database");
      return;
    }
  }

  return await axios.post(`${BASE_URL}/contacts`, payload).catch((error) => {
    return error;
  });
}

export async function updateContactInfo(payload) {
  return await axios
    .put(`${BASE_URL}/contacts/${payload.id}`, payload.data)
    .catch((error) => {
      return error;
    });
}

export async function deleteContact(id) {
  return await axios.delete(`${BASE_URL}/contacts/${id}`).catch((error) => {
    return error;
  });
}
