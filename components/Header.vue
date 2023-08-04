<template>
  <div class="jrc__navigation position-fixed top-0" style="left: 0;">
    <div class="jrc__navigation__inner p-4 h-100">
      <div class="jrc__navigation__content">
        <div class="jrc__navigation__content_image d-flex justify-content-center my-3">
          <img src="/logo.png" alt="Logo">
        </div>
        <div class="jrc__navigation__content_listing mt-5">
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="item in navigationLinks" :key="item">
              <div class="list-group-item-parent d-flex flex-row justify-content-between w-100">
                <a :href="item.link" class="text-black text-decoration-none jrc__navigation__listing_item">
                  <span v-html="item.icon"></span>
                  {{item.name}}
                </a>
                <span class="badge rounded-pill" style="height: 20px; background: #c7c7c7;" v-if="item.children">{{ item.children.length }}</span>
              </div>
              <div class="list-group-item__children d-flex flex-column mt-3" v-if="item.children && item.children.length > 0">
                <a v-for="child in item.children" :key="child" :href="child.link" class="text-black text-decoration-none">
                  {{child.name}}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.jrc {
  &__navigation {
    box-shadow: 8px 8px 80px rgba(0, 0, 0, 0.11);
    border-radius: 1.4rem;
    margin: 3rem;
    left: 0;
    width: calc(10rem + (3rem * 2));
    height: calc(100vh - (3rem * 2));
    transition: box-shadow .3s ease;
    &:hover {
      box-shadow: 8px 8px 80px rgba(0, 0, 0, 0.21);
    }
    &__listing_item {
      font-weight: bold;
      font-size: 1.1rem;
      line-height: 40px;
      svg {
        margin-right: .3rem;
        transition: margin-right .3s ease;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      .list-group-item {
        border: none;
        &:hover {
          svg {
            margin-right: .45rem;
          }
        }
        &__children {
          width: auto;
          max-width: max-content;
          height: 100%;
          position: relative;
          max-height: max-content;
          &:hover {
            &:after {
              height: 100%;
            }
          }
          &:after {
            content: "";
            width: 2px;
            height: 0;
            background: #000;
            position: absolute;
            bottom: 0;
            left: -10px;
            transition: height .3s ease;
          }
        }
      }
      &_image img {
        width: 33%;
      }
    }
  }
}
</style>

<script>
export default {
  name: "Header",
  data() {
    return {
      navigationLinks: [
        {
          name: "Portfolio",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-aperture"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg>',
          link: "#",
          children: [
            {
              name: "49 Vintage Shooting",
              link: "#asd"
            }
          ]
        },
        {
          name: "Contact",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>',
          link: "#"
        }
      ]
    }
  }
}
</script>