const url = "https://api.openai.com/v1/completions";

export const generateContentByGPT = async (prompt: string) => {
  const data = JSON.stringify({
    model: "gpt-3.5-turbo-instruct",
    prompt: prompt,
    max_tokens: 1000,
    temperature: 0.5,
  });

  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
  });

  return fetch(url, {
    method: "POST",
    body: data,
    headers: headers,
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
