<template>
    <div class="form">
        <div v-for="(item, key) in form" :key="key">
            <div class="form-group" v-if="item.type == types.input">
                <label :for="item.id">{{ item.label }}</label>
                <input  :type="item.type" class="form-control" :id="item.id" :placeholder="`Enter ${item.label}`">
            </div>
        </div>
    </div>
</template>
<script>
const TYPE_INPUT = 'input';
export default {
    data() {
        return {
            types: {
                input: 'input'
            },

            form: {

            }
        }
    },

    props: {
        form: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
        console.log(this.form)
    }
}
</script>