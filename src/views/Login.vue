<template>
<div>
<img src="/img/logo.png" alt="KT法" class="logo">
  <p>ユーザー登録じゃない</p>
  <form method="post" action="register">
    <div class="field">
      <label for="name" class="label">名前</label>
      <input type="text" class="control" id="name" name="name"  required>
    </div>
    <div class="field">
      <label for="email" class="label">Eメール</label>
      <input type="email" class="control" id="email" name="email"  required>
    </div>
    <div class="field">
      <label for="password" class="label">パスワード</label>
      <input type="password" class="control" id="password" name="password"  required>
    </div>
    <div class="field">
      <label for="password2" class="label">確認</label>
      <input type="password" class="control" id="password2" name="password2"  required>
    </div>
    <button type="submit" class="button is-primary ">入力</button>
  </form>
</div>
</template>
<style lang="scss" scoped>
h1 {
  color: #f00;
}
</style>
<script></script>
