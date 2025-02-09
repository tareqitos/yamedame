export default async function getStaticProps(path: string) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    try {
        const response = await fetch(`${API_URL}/api/${path}`);
        if (!response.ok) { // Check if response is successful
            throw new Error(`API request failed with status ${response.status}`);
          }
          const data = await response.json()
          return {
            props: {
                data: data
            }
          }
    } catch (error) {
        console.error(error)
    }
}