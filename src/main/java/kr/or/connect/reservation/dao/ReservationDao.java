package kr.or.connect.reservation.dao;

import static kr.or.connect.reservation.sql.DisplayInfoSql.SELECT_PRODUCT_IMAGE;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import static kr.or.connect.reservation.sql.ReservationSql.*;

import kr.or.connect.reservation.dto.Price;
import kr.or.connect.reservation.dto.ReservationRequest;
import kr.or.connect.reservation.dto.ReservationResponse;
import kr.or.connect.reservation.dto.Ticket;

@Repository
public class ReservationDao {
	private SimpleJdbcInsert reservationInfoInsert;
	private SimpleJdbcInsert reservationInfoPriceInsert;
	private NamedParameterJdbcTemplate jdbcTemplate;

	private RowMapper<ReservationResponse> rsvMapper = BeanPropertyRowMapper.newInstance(ReservationResponse.class);
	private RowMapper<Ticket> ticketMapper = BeanPropertyRowMapper.newInstance(Ticket.class);
	
	public ReservationDao(DataSource dataSource) {
		reservationInfoInsert = new SimpleJdbcInsert(dataSource).withTableName("reservation_info").usingGeneratedKeyColumns("id");
		reservationInfoPriceInsert = new SimpleJdbcInsert(dataSource).withTableName("reservation_info_price").usingGeneratedKeyColumns("id");
		jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}
	
	public Long insertRservationInfo(ReservationRequest reservationRequest) {
		SqlParameterSource parameterSource = new BeanPropertySqlParameterSource(reservationRequest);
		return reservationInfoInsert.executeAndReturnKey(parameterSource).longValue();
	}
	
	public Long insertReservationInfoPrice(Price price) {
		SqlParameterSource parameterSource = new BeanPropertySqlParameterSource(price);
		return reservationInfoPriceInsert.executeAndReturnKey(parameterSource).longValue();
	}
	
	public List<ReservationResponse> selectAllAtEmail(String email){
		Map<String, String> paramMap = new HashMap();
		paramMap.put("email", email);
		
		return jdbcTemplate.query(SELECT_ALL_AT_EMAIL, paramMap, rsvMapper);
	}
	
	public List<Ticket> selectTicketAtRsvInfoId(Long rsvInfoId){
		Map<String, Long> paramMap = new HashMap();
		paramMap.put("rsvInfoId", rsvInfoId);
		
		return jdbcTemplate.query(SELECT_ALL_TICKET_AT_RSVINFOID, paramMap, ticketMapper);
	}
}
