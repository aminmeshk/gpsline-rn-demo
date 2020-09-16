package com.gpslinerndemo;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

import ir.map.sdk_map.Mapir;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
            packages.add(new SimpleMapIrPackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    Mapir.getInstance(this, "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM2ZGRiMWMyYzQ5YTEwNmFiYjQwODY5M2FmYmFlNTM5MmQ2YzkwNDE5OTk1ZjhhN2M3ZmI4YjM0ZmY3NTYxYTY1OTdhZTk3YTM2ZDBjOWRiIn0.eyJhdWQiOiIxMDgyNyIsImp0aSI6ImM2ZGRiMWMyYzQ5YTEwNmFiYjQwODY5M2FmYmFlNTM5MmQ2YzkwNDE5OTk1ZjhhN2M3ZmI4YjM0ZmY3NTYxYTY1OTdhZTk3YTM2ZDBjOWRiIiwiaWF0IjoxNTk5OTcyNzc5LCJuYmYiOjE1OTk5NzI3NzksImV4cCI6MTYwMjY1NDc3OSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.bYdDMhr8HRMUt1YYjpZEPD8FVpHj2dIqqsaZYHUe2TO96hS_JNpI7tgAj67kYvG6X3jePiLOW8O3pVCfpqHQCAMxqv8LCD1eg1mvI_pfYmYrQYAcbpSMt8OiC11GdBLNF6fLyAr4rRGrihNH--qyP3AUeYSvknySYfFz5GQM0UlfB4mAtAn7hQM1mQOEZAuiwCswg8Mp1iGLyHlYKc3Jue0bIKYl39ZcXdTNsyZUO_GXxsNc82UDOh2mfM69Z4VKEQegCeUiQ3oSMXzfda01-d1HMvyAo_LuwDL9qgM4J93Pi806h0zIo9iJTn5BYjpR2YedfPmwEgWRQ2Jd4FpR0A");
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.gpslinerndemo.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
