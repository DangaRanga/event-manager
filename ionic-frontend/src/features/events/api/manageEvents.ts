export async function searchEvent(data: any, token:string | null){
    const response = await fetch("http://localhost:8080/api/v1/search", {
      headers: {
        Authorization: `${token}`,
      },
      body: data,
      method: "POST",
    });
    const event_data = await response.json();
    return event_data;
}