const titleCase = (s) => {
    let result = ""
    s.split(" ").forEach(word => {
      result += word[0].toUpperCase() + word.slice(1).toLowerCase() + " "
    })
    return result.trim()
  }
  
  console.log(titleCase("I'm a little tea pot"));