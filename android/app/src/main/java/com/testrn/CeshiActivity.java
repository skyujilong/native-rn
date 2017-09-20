package com.testrn;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.widget.Button;

public class CeshiActivity extends AppCompatActivity {

    private Button button;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_ceshi);
        button = (Button)findViewById(R.id.button_1);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(CeshiActivity.this,MainActivity.class);
                Bundle bundle = new Bundle();
                bundle.putString("name","yjl");
                bundle.putInt("age",28);
                intent.putExtra("data",bundle);
                startActivity(intent);
            }
        });
    }
}
