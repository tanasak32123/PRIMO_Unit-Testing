import { expect, test } from 'bun:test'
import { merge } from '../mergeArrays'

test("merge 3 empty arrays", () => {
    const collection_1: number[] = []
    const collection_2: number[] = []
    const collection_3: number[] = []

    const r = merge(collection_1, collection_2, collection_3)
    
    expect(r).toBeEmpty()
})

test("merge 3 arrays with elements in only collection_1", () => {
    const collection_1 = [1, 3, 5, 6, 8]
    const collection_2: number[] = []
    const collection_3: number[] = []

    const r = merge(collection_1, collection_2, collection_3)
    
    expect(r).toEqual([1, 3, 5, 6, 8])
})

test("merge 3 arrays with elements in only collection_2", () => {
    const collection_1: number[] = []
    const collection_2 = [8, 3, 2, 1]
    const collection_3: number[] = []

    const r = merge(collection_1, collection_2, collection_3)
    
    expect(r).toEqual([1, 2, 3, 8])
})

test("merge 3 arrays with elements in only collection_3", () => {
    const collection_1: number[] = []
    const collection_2: number[] = []
    const collection_3 = [1, 2, 3, 8]

    const r = merge(collection_1, collection_2, collection_3)
    
    expect(r).toEqual([1, 2, 3, 8])
})

test("merge 3 arrays with elements in collection_1 and collection_2", () => {
    const collection_1 = [1, 3, 5, 6, 8]
    const collection_2 = [6, 4, 2]
    const collection_3: number[] = []

    const r = merge(collection_1, collection_2, collection_3)
    
    expect(r).toEqual([1, 2, 3, 4, 5, 6, 6, 8])
})

test("merge 3 arrays with elements in collection_2 and collection_3", () => {
    const collection_1: number[] = []
    const collection_2 = [6, 4, 2]
    const collection_3 = [1, 3, 5, 6, 8]

    const r = merge(collection_1, collection_2, collection_3)
    
    expect(r).toEqual([1, 2, 3, 4, 5, 6, 6, 8])
})

test("merge 3 arrays with elements in collection_1 and collection_3", () => {
    const collection_1 = [2, 4, 6]
    const collection_2: number[] = []
    const collection_3 = [1, 3, 5, 6, 8]

    const r = merge(collection_1, collection_2, collection_3)
    
    expect(r).toEqual([1, 2, 3, 4, 5, 6, 6, 8])
})

test("merge 3 arrays with elements in all arrays", () => {
    const collection_1 = [1, 3, 5]
    const collection_2 = [6, 4, 2]
    const collection_3 = [0, 2, 4, 6, 8]

    const r = merge(collection_1, collection_2, collection_3)
    
    expect(r).toEqual([0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 8])
})