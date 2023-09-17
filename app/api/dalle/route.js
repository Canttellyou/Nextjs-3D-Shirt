import OpenAI from 'openai';




const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

export async function POST(req, { params }) {

    try {
        const { prompt } = await req.json();
        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        });
        console.log(response);

        const image = response.data;
        console.log(image);


        return new Response(JSON.stringify({ photo: image }), { status: 200 })
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: `Something went wrong: ${error}` }), { status: 500 })
    }

}