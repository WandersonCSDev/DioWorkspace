const BASE_URL =
  "https://github.com/WandersonCSDev/DioWorkspace/blob/Wanderson/Javascript/SincronoAssincrono/Atividade/assets/imgConfig.json";

const getCars = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.webpurl;
  } catch (e) {
    console.log(e.message);
  }
};
