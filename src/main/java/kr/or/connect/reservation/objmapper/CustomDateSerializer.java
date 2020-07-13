package kr.or.connect.reservation.objmapper;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

public class CustomDateSerializer extends JsonSerializer<Date> {
	private static final String customDateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS";

	@Override
	public void serialize(Date value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
		gen.writeString(new SimpleDateFormat(customDateFormat).format(value));
	}
}
