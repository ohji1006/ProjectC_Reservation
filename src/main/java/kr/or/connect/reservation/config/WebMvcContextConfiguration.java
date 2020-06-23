package kr.or.connect.reservation.config;

import java.text.SimpleDateFormat;
import java.util.List;
import java.util.TimeZone;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import kr.or.connect.reservation.objmapper.CustomObjectMapper;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = { "kr.or.connect.reservation.controller" })
public class WebMvcContextConfiguration extends WebMvcConfigurerAdapter {

	@Override
	public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
		configurer.enable();
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/css/**").addResourceLocations("classpath:/css/").setCachePeriod(31556926);
		registry.addResourceHandler("/js/**").addResourceLocations("classpath:/js/").setCachePeriod(31556926);
		registry.addResourceHandler("/img/**").addResourceLocations("classpath:/img/").setCachePeriod(31556926);
		registry.addResourceHandler("/img_map/**").addResourceLocations("classpath:/img_map/").setCachePeriod(31556926);
		registry.addResourceHandler("/htmls/**").addResourceLocations("classpath:/htmls/").setCachePeriod(31556926);
		registry.addResourceHandler("/font/**").addResourceLocations("classpath:/font/").setCachePeriod(31556926);
	}

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("index");
	}

	@Bean
	public InternalResourceViewResolver getInternalResourceViewResolver() {
		InternalResourceViewResolver internalResourceViewResolver = new InternalResourceViewResolver();
		internalResourceViewResolver.setPrefix("/WEB-INF/views/");
		internalResourceViewResolver.setSuffix(".jsp");
		return internalResourceViewResolver;
	}

    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) 
    {
        converters.add(new MappingJackson2HttpMessageConverter(customObjectMapper())); 
    }
    
    public ObjectMapper customObjectMapper() {
        return new CustomObjectMapper();
    }
	
}
