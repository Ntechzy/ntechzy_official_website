import { urlFor } from "./sanity";

export const components = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) return null;

            return (
                <div className="my-4 flex justify-center items-center md:h-[50vh] object-cover">
                    <img
                        src={urlFor(value).url()}
                        alt={value.alt || 'Image'}
                        width={800}
                        height={500}
                        className="rounded-lg md:w-[60%] h-full"
                    />
                </div>
            );
        },
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
    },
    block: {
        h1: ({ children }) => <h1 className="text-2xl font-bold my-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-xl font-semibold my-3">{children}</h2>,
        normal: ({ children }) => <p className="my-2">{children}</p>,
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc ml-5 my-2">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal ml-5 my-2">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li className="my-1">{children}</li>,
        number: ({ children }) => <li className="my-1">{children}</li>,
    },
};
