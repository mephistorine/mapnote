export function getDataUrlFromImageFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()

    fileReader.addEventListener("load", (event: ProgressEvent) => resolve((event.target as FileReader).result as string), { once: true })
    fileReader.addEventListener("error", (event) => reject(event), { once: true })

    fileReader.readAsDataURL(file)
  })
}

