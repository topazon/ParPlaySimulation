jQuery(document).bind('turbolinks:load ajaxComplete', function() {

  const photo = document.getElementById('photo_prev');
  photo.onload = function() {
    const photo_size_x = document.getElementById('photo_area').clientWidth;
    const photo_size_y = document.getElementById('photo_area').clientHeight;
    document.getElementById('photo_size_x').value = photo_size_x;
    document.getElementById('photo_size_y').value = photo_size_y;
    //　初期map_size
    const map_size_x = document.getElementById('map_area').clientWidth;
    const map_size_y = document.getElementById('map_area').clientHeight;
    document.getElementById('map_size_x').value = map_size_x;
    document.getElementById('map_size_y').value = map_size_y;
  };

    let photo_area = document.getElementById('photo_area');
    // window変更時のphoto_size,map_size取得
    window.addEventListener( 'resize', function() {
    // photoサイズ(ap(after_photo),bp(before_photo))
    // offsetXやclientWidthでは小数点以下が切られる
    const ap_size_x = document.getElementById('photo_area').getBoundingClientRect().width;
    const ap_size_y = document.getElementById('photo_area').getBoundingClientRect().height;
    // const ap_size_x = document.getElementById('photo_area').clientWidth;
    // const ap_size_y = document.getElementById('photo_area').clientHeight;
    const bp_size_x = document.getElementById('photo_size_x');
    const bp_size_y = document.getElementById('photo_size_y');
    // mapサイズ
    const am_size_x = document.getElementById('strategy_map').getBoundingClientRect().width;
    const am_size_y = document.getElementById('strategy_map').getBoundingClientRect().height;
    const bm_size_x = document.getElementById('map_size_x');
    const bm_size_y = document.getElementById('map_size_y');
    
    // pin位置(bp(before_photo),bm(before_map))取得
    const bp_target_x = document.getElementById('photo_target_x');
    const bp_target_y = document.getElementById('photo_target_y');
    const bp_point_x = document.getElementById('photo_point_x');
    const bp_point_y = document.getElementById('photo_point_y');
    const bm_target_x = document.getElementById('photo_target_x');
    const bm_target_y = document.getElementById('photo_target_y');
    const bm_point_x = document.getElementById('photo_point_x');
    const bm_point_y = document.getElementById('photo_point_y');
    const bm_shoot_x = document.getElementById('photo_shoot_x');
    const bm_shoot_y = document.getElementById('photo_shoot_y');
    
    // (prosses1)
    // 変更前のphoto（map）サイズ：変更前のpin座標
    // = 変更後のphoto（map）サイズ：求めたい値（変更後のpin座標）
    // bp_size_x : bp_target_x = ap_size_x: ap_target_x
    ap_target_x = (Number(bp_target_x.value) * ap_size_x)/Number(bp_size_x.value);
    ap_target_y = (Number(bp_target_y.value) * ap_size_y)/Number(bp_size_y.value);
    let photo_pin_target = document.getElementById("photo_pin_target");
    // pin要素自身のx,y座標
    let width = photo_pin_target.offsetWidth;
    let height = photo_pin_target.offsetHeight;
    // pin移動
      // hidden_fieldのvalue書き換え
      bp_size_x.value = ap_size_x;
      bp_size_y.value = ap_size_y;
      bm_size_x.value = am_size_x;
      bm_size_y.value = am_size_y;
      
    }, false );
    
    
  });
    
    