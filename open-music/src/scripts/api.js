
export async function newDataAlbums() {
    try {
        const newAlbums = await fetch('https://openmusic-fake-api.onrender.com/api/musics');
        if (!newAlbums.ok) {
            throw new Error(`HTTP error! status: ${newAlbums.status}`);
        }
        const data = await newAlbums.json();
        return data;
    } catch (error) {
        console.error("Error ao buscar música:", error);
        return null;
    }
}
