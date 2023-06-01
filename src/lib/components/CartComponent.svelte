<script>
// @ts-nocheck

  import { BookingStore } from '$lib/stores/Store'

  function changeHeight() {
    console.log('clicked')
    document.querySelector('#cart-items').classList.toggle('expandable')
  }
</script>

<main>
  <h2 on:click={event => changeHeight()}>Your Cart: {$BookingStore.length} items</h2>
  <ul class="expandable" id="cart-items">
    {#each $BookingStore as destination}
      <li>
        <p>{destination.destination} : ${destination.price}</p>
      </li>
    {/each}

</main>

<style>
  main {
    position: absolute;
    top: 0;
    right: 20px;
    font-family: 'Roboto', sans-serif;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
  }

  #cart-items {
    width: 300px;
  }

  .expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }
</style>