import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer UGg0SOVA7HEzGrAHTgXEVoSeYwqlQurrTpVApdbr1dOWG6OUftUOx4L5YKUR4-nZfdZpByV1JmLJImEgKFPK517M3_wsmMZk766OTdJJ-1ugTdXJlRyNH4SUFjyeXnYx',
  },
});
