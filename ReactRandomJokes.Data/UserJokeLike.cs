using System;
using System.Text.Json.Serialization;

namespace ReactRandomJokes.Data
{
    public class UserJokeLike
    {
        public int UserId { get; set; }
        public int JokeId { get; set; }

        [JsonIgnore]
        public User User { get; set; }

        [JsonIgnore]
        public Joke Joke { get; set; }

        public bool Like { get; set; }
        public DateTime Date { get; set; }
    }
}