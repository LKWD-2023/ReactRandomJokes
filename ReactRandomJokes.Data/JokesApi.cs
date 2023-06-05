using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace ReactRandomJokes.Data
{
    public static class JokesApi
    {
        private class JokeApiJoke
        {
            public int JokeId { get; set; }
            public string Setup { get; set; }
            public string Punchline { get; set; }
        }

        public static Joke GetJoke()
        {
            using var client = new HttpClient();
            var json = client.GetStringAsync("https://jokesapi.lit-projects.com/jokes/programming/random")
                .Result;
            var joke = JsonSerializer.Deserialize<List<JokeApiJoke>>(json,
                new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                }).FirstOrDefault();
            
            return new Joke
            {
                OriginId = joke.JokeId,
                Setup = joke.Setup,
                Punchline = joke.Punchline
            };
        }
    }
}