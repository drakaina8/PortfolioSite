interface coordinates {
    x: number,
    y: number
}

const getRandomCoordinates = (): coordinates => {
    // Create X & Y coordinates for deserialized React components
    let randomX: number = Math.random() * window.innerWidth;
    let randomY: number = Math.random() * window.innerHeight;

    return {x: randomX, y: randomY};
}

export default getRandomCoordinates;