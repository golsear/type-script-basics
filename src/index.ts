type Point = { x: number, y: number };

const point: Point = { x: 0, y: 0 };

// point = { x: 1, y: 2 } // Error

// All other behaviours are the same as 'let'
point.x = 123;
point.y = 123;