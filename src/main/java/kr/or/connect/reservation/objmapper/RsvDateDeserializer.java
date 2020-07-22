package kr.or.connect.reservation.objmapper;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

public class RsvDateDeserializer extends JsonDeserializer<Date> {
	private static final SimpleDateFormat DATEFORMATTER = new SimpleDateFormat("yyyy.MM.dd");

	@Override
	public Date deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
		try {
			System.out.println(DATEFORMATTER.parse(p.getValueAsString()));
			return DATEFORMATTER.parse(p.getValueAsString());
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return null;
	}
}
