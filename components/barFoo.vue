<template>
  <Menu as="div" class="select-none">
    <MenuButton>Options</MenuButton>
    <MenuItems>
      <MenuItem
        v-for="link in links"
        :key="link.href"
        v-slot="{ active }"
        as="template"
        class="cursor-pointer"
      >
        <div
          :href="link.href"
          :class="{ 'bg-blue-500 text-white': active, 'bg-white text-black': !active }"
        >
          {{ link.label }}
        </div>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>

<script setup>
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

  const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
  ]
</script>
