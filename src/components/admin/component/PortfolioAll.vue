<template>
    <div  class=" col-lg-9 p-0 m-0">
                <div  class="bg-t-2"></div>
                <CardAdmin>
                    <template v-slot:card-header>
                        <h1>พอร์ต</h1>
                    </template>
                    <template v-slot:card-content >
                        <h1>ดดด</h1>
                    </template>
                    <template v-slot:card-button >
                        
                        <button type="button" class="btn btn-primary">Primary</button>

                    </template>
                    
                </CardAdmin>
            </div>

    
</template>

<script>
import CardAdmin from '../CardAdmin.vue'

export default {
  name: 'PortfolioAll',
  components: {
    CardAdmin,
    
  },
  methods:{


  
  }
}
</script>