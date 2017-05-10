<template>
  <div class="container">
    <div class="entry-container">
      <h2>{{item.title}}</h2>
      <div class="info">
        <span>{{from_user}}</span><span>{{item.created_time}}</span>
      </div>
      <p>{{item.content}}</p>
      <button type="button" class="btn btn-danger btn-sm">&#10084; {{like}} Like </button>
    </div>
    <div class="comment-area">
      <h2>Comment</h2>
      <template v-for="comment in comments">
        <div class="comment">
          <div class="comment-info">
            <h4>{{comment.user_name}} | <small>{{comment.created_time}}</small></h4>
          </div>
          <p>{{comment.message}}</p>
        </div>
      </template>
      <form class="" method="post">
        <textarea name="name" rows="8" cols="80" class="input input-full" placeholder="Leave a comment..."></textarea>
        <div class="text-right">
          <button type="submit" name="button" class="btn btn-primary">Comment</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {loadJSON} from '../js/common'

export default {
  name: 'entry',
  data() {
    return {
      id: this.$route.params.id,
      item: {},
      from_user: '',
      like: 0,
      comments: {}
    }
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      loadJSON('/data/blog.json',(response) => {
        this.item = JSON.parse(response).blog.find(result => result.id == this.id);
        this.from_user = this.item.from_user.name;
        this.like = this.item.like.length;
        this.comments = this.item.comments;
      });
    }
  }
}
</script>

<style lang="scss">
.container {
  margin-bottom:40px;
}
.entry-container {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 15px 40px;
}
.info {
  color: #a6a6a6;
  span {
    &:not(:last-child) {
      border-right: 1px #a6a6a6 solid;
      margin-right:15px;
      padding-right: 17px;
    }
  }
}
.comment-area {
  h2 {
    border-bottom: 1px solid #000;
    padding-bottom:10px;
  }
}
.comment {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 0 15px;

  small {
    color: #a6a6a6;
    font-weight: normal;
  }
}
</style>
