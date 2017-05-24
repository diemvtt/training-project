<template>
  <div class="container">
    <div class="entry-container">
      <h2>{{item.title}}</h2>
      <p>{{item.body}}</p>
    </div>
    <!-- <div class="comment-area">
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
    </div> -->
  </div>
</template>

<script>
import {loadJSON} from '../../js/common'

export default {
  name: 'entry',
  data() {
    return {
      id: this.$route.params.blog,
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
      loadJSON('http://jsonplaceholder.typicode.com/posts',(response) => {
        this.item = JSON.parse(response).find(result => result.id == this.id);
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
  font-size:15px;
  padding: 0 15px 40px;
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
