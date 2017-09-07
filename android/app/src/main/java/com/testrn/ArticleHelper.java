package com.testrn;

/**
 * Created by jilong5 on 2017/9/7.
 */

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;


public class ArticleHelper extends ReactContextBaseJavaModule{
    public ArticleHelper(ReactApplicationContext reactContext){
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ArticleHelper";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String,Object> constants = new HashMap<>();
        constants.put("chno",12);
        constants.put("appid",1);
        constants.put("appver","4.1.2");
        constants.put("deviceid","62762b1fda6b3f7b71296786fa510e30");
        constants.put("login_uid","1595082642");
        constants.put("article_id","1342ac9e20102x2fn");
        constants.put("blog_uid","5170186722");
        constants.put("sign","ddbcc9e22f03882fb2bee91a94e3b28c336a1dbf7d10ffd086dd82b1ecce9b3b");
        return constants;
    }
}
