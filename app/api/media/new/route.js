import addMedia from "@/queries/media/new/route";

export const POST = async (request) => {
    try {
      let response;
  
      const mediaData = await request.json();
  
      const result = await addMedia(mediaData);
  
      if (result) {
        response = { success: 1, message: "Successfully Added Media.", errors: [], mediaId: result.insertId};
        return new Response(JSON.stringify(response), { status: 200 });
      }
  
      response = { success: 0, message: `Something went wrong ${result}.`, errors: []};
      return new Response(JSON.stringify(response), { status: 400 });
    } catch (error) {
      return new Response(" Reason : " + error, { status: 500 });
    }
  };