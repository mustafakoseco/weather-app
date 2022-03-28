import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAction } from "./redux/slices/weatherSlices";
function App() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherAction(""));
  }, []);

  //store'dan il seç
  const state = useSelector((state) => state);
  const { weather, loading, error } = state;
  console.log(state);
  return (
    <div>
      <section class="relative bg-gray-900 min-h-screen">
        <div class="relative container pt-20 px-4 mb-20 mx-auto text-center">
          <h2 class="lg:mb-4 text-white text-4xl lg:text-4xl font-semibold">
            Weather App
          </h2>
          <p class="max-w-3xl mx-auto lg:mb-12 text-white text-xl opacity-50">
            Please Enter City
          </p>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search City"
            class="relative z-10 inline-block w-full md:w-auto px-3 py-2 mr-4 font-medium leading-normal bg-transparent border-2 rounded-lg text-yellow-400 "
          ></input>
          <button
            onClick={() => dispatch(fetchWeatherAction(city))}
            type="button"
            className="inline-flex items-center px-3 pr- 28 text-center py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Search
          </button>
        </div>
        {/* hava durumunu burada goster */}
        {loading ? (
          <h1 className="text-gray-400 text-4xl text-center">
            Loading please wait...
          </h1>
        ) : error ? (
          <h1 className="text-red-400 text-2xl text-center">
            {error?.message}
          </h1>
        ) : (
          <div class="max-w-6xl px-4 mx-auto pb-10">
            <div class="flex flex-wrap justify-center">
              <div class="w-full md:w-1/3 px-4">
                <div class="p-8 border border-blue-800 rounded-lg">
                  <div class="flex justify-start items-center">
                    <span class="flex items-center justify-center w-16 h-16 rounded-full border-2">
                      {/* ikon */}
                      <img
                        class="w-56 "
                        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                        alt="/"
                      />
                    </span>
                    <h1 class="text-gray-300 pl-5">
                      {weather?.weather[0].main}
                    </h1>{" "}
                  </div>
                  <h1 class="text-gray-300 text-center text-4xl mb-10">
                    {Math.ceil(Number(weather?.main.temp))}{" "}
                    <span class="text-yellow-500 text-4xl">°C</span>
                  </h1>
                  <h3 class="mb-6 text-xl text-white font-semibold">
                    {weather?.name}, {weather?.sys?.country}
                  </h3>
                  <p class="mb-8 text-gray-300">
                    The weather condition in {weather?.name},{" "}
                    {weather?.sys?.country} is described as :{" "}
                    {weather?.weather[0].description} with a temperature of{" "}
                    {Math.ceil(Number(weather?.main.temp))} °C and a humidity of{" "}
                    {weather?.main?.humidity} %
                  </p>
                  <span class="ml-auto flex items-center justify-center w-16 h-16 rounded-full border-2">
                    {/* ikon */}
                    <img
                      class="w-56 "
                      src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
                      alt="/"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      {/* Footer */}
      <div class="text-center bg-gray-900 font-semibold">
        <p class="text-white">
          Developed by
          <div class="pb-8">
            <a
              href="https://github.com/mustafakoseco"
              class="text-yellow-500"
              target="_blank"
            >
              Mustafa Kose
            </a>
          </div>
        </p>
      </div>
    </div>
  );
}

export default App;
