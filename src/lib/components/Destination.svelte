<script>
  export let destination;
</script>

<main>
  <h1>{destination.destination}</h1>
  <p>${destination.price}</p>
  <img src={destination.image} width="400" alt={destination.destination} />
</main>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
  }
  p {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 300;
  }
</style>