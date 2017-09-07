package com.testrn;

/**
 * Created by jilong5 on 2017/9/7.
 */

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class RegisterArticleHelper implements ReactPackage {
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
//        可视组件的支持
        return Collections.emptyList();
    }

    /**
     * 将ArticleHelper注册进入reactPackage
     * @param reactContext
     * @return
     */
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new ArticleHelper(reactContext));
        return modules;
    }
}
