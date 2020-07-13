package kr.or.connect.reservation.config;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.TimeZone;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ser.std.DateSerializer;

@Configuration
@Import({ DBConfig.class })
@ComponentScan(basePackages = { "kr.or.connect.reservation.dao", "kr.or.connect.reservation.service" })
public class ApplicationConfig {

}
