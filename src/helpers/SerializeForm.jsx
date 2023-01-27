
export const SerializeForm = (target) => {
    const formData = new FormData(target);
    const completeObjt = {};
    for (let [name, value] of formData) {
        completeObjt[name] = value;
    }
    return completeObjt;
}
