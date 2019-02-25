const pathCheck = (path) => {
  if (path.length > '/projects/'.length) {
    return true;
  }
  return false;
}

export default pathCheck;
