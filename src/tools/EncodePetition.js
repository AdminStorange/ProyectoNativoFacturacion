const encodePetition = (parameters, formBody = []) => {
    for (let property in parameters) {
      let encodedKey = encodeURIComponent(property)
      let encodedValue = encodeURIComponent(parameters[property])
      formBody.push(encodedKey + "=" + encodedValue)
    }
    return formBody.join("&")
}

export default encodePetition