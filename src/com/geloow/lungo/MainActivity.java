package com.geloow.lungo;

import android.os.Bundle;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.view.Menu;
import android.webkit.WebView;

public class MainActivity extends Activity {

	@SuppressLint("SetJavaScriptEnabled")
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		
		
		WebView webview = (WebView) findViewById(R.id.webkit);
		webview.getSettings().setJavaScriptEnabled(true);
		webview.getSettings().setLoadWithOverviewMode(true);
		webview.getSettings().setUseWideViewPort(true);
		
		webview.setScrollBarStyle(WebView.SCROLLBARS_INSIDE_OVERLAY);
		webview.setScrollbarFadingEnabled(false);
		webview.setHorizontalScrollBarEnabled(false);
		webview.loadUrl("file:///android_asset/index.html");
				
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.activity_main, menu);
		return true;
	}

}
