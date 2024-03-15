use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn find_max(arr: &[i32]) -> Option<i32> {
    arr.iter().max().copied()
}

pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
