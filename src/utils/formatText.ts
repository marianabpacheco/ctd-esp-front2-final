export function formatText(text:string){
    return  text.split(" ")
    .map((string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    })
    .join(" ");
}