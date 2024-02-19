export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const n1 = collection_1.length; const n2 = collection_2.length; const n3 = collection_3.length;
    const newSize = n1 + n2 + n3
    const tmp: number[] = new Array(newSize)
    let ai = 0; let bi = collection_2.length - 1; let ci = 0;
    for (let i = 0; i < newSize; i++) {
        if (ai >= n1 && ci >= n3) { tmp[i] = collection_2[bi--]; continue; }
        if (bi < 0 && ci >= n3) { tmp[i] = collection_1[ai++]; continue; }
        if (ai >= n1 && bi < 0) { tmp[i] = collection_3[ci++]; continue; }
        tmp[i] = (bi < 0 || collection_1[ai] < collection_2[bi]) ? 
                    (ci >= n3 || collection_1[ai] < collection_3[ci]) ? collection_1[ai++] : collection_3[ci++] 
                    : (ci >= n3 || collection_2[bi] < collection_3[ci]) ? collection_2[bi--] : collection_3[ci++]
    }
    return tmp
}