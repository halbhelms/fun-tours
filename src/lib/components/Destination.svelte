<script>
  import { BookingStore } from '$lib/stores/Store'
  export let destination;
</script>

<main>
  <h1>{destination.destination}</h1>
  <p>${destination.price}</p>
  <img src={destination.image} width="400" alt={destination.destination} />
  <button on:click={BookingStore.add(destination)}>Book Now</button>
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
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    width: 500px;
    margin: 0 auto;
  }
  button {
    margin-top: 2rem;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    background-color: #f1356d;
    color: white;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
  }
</style>