

function inOrderArray(root) {
  let left = [];
  let right = [];
  // if the root is null, return an empty array
  if (root === null) return [];
  // get the array for visiting the left node
  // get the array for visiting the right node
  if (root.left) {
    left = [...inOrderArray(root.left)];
  }

  if (root.right) {
    right = [...inOrderArray(root.right)];
  }
  // return the left array concatenated with the root value
  //   concatenated with the right array
  return [...left, root.val, ...right];

}

function postOrderArray(root) {
  let left = [];
  let right = [];
  // if the root is null, return an empty array
  if(root === null) return [];
  // get the array for visiting the left node
  // get the array for visiting the right node
  if (root.left) {
    left = [...postOrderArray(root.left)];
  }

  if (root.right) {
    right = [...postOrderArray(root.right)];
  }
  // return the left array concatenated with the right array
  //   concatenated with the root value
  return [...left, ...right, root.val];
}


module.exports = {
  inOrderArray,
  postOrderArray
};
