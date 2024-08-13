<template>
    <div>
        <NavBarview/>
        <h1> this is AdminPage</h1>
        <TableList>
            
        </TableList>
        <ContactSocial/>
    </div>
</template>
<script>
import TableList from '../components/admin/TableList.vue'


export default {
    name: 'ResumePage',
    components: {
        TableList,
    }
}
</script>

<style>

</style>