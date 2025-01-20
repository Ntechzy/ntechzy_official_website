

export async function GET(req,{params}){
    console.log("slug   ----------" , params.slug);
    const a = req.searchParams
    console.log("slug   ----------" , a);
    //get params
    if(params.slug == "form.js"){
        const data = await fetch("https://lms.ntechzy.in/api/v1/student-form/form.js");
        const response =  await data.text();
        console.log(response , "Res")
        return new Response(response, {
            status: 200,
            headers: {
                'Content-Type': 'application/javascript',
                'Cache-Control': 'public, max-age=31536000'
            }
        });
    }

    return new Response("Not Found", {
    status: 404,
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=31536000'
    }
    });
}